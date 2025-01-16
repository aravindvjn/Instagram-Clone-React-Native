import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { firebaseDatabaseURL } from '../store/auth';
import { fetchBasicUserDataById } from '../../hooks/useFetchBasicUserData';
const generateChatId = (user1_id: string, user2_id: string) => {
    const sortedUserIds = [user1_id, user2_id].sort();
    return `${sortedUserIds[0]}_${sortedUserIds[1]}`;
};

export const createChat = async (user1_id: string, user2_id: string) => {
    const chatId = generateChatId(user1_id, user2_id);
    const token = await AsyncStorage.getItem('idToken');
    const url = `${firebaseDatabaseURL}/chats/${chatId}.json?auth=${token}`;

    const chatData = {
        user1_id: user1_id,
        user2_id: user2_id,
        messages: {},
    };

    try {
        const response = await axios.put(url, chatData);
        return true;
    } catch (error) {
        console.error('Error creating chat:', error);
        return false;
    }
};

export const sendMessage = async (user1_id: string, user2_id: string, messageText: string) => {
    const chatId = generateChatId(user1_id, user2_id);
    const timestamp = new Date().toISOString();
    const token = await AsyncStorage.getItem('idToken');
    const url = `${firebaseDatabaseURL}/chats/${chatId}/messages.json?auth=${token}`;

    const message = {
        text: messageText,
        senderId: user1_id,
        timestamp: timestamp,
    };

    try {
        const response = await axios.post(url, message);
        return true
    } catch (error) {
        console.error('Error sending message:', error);
        return false;
    }
};


export const fetchMessages = async (user1_id: string, user2_id: string) => {
    const chatId = generateChatId(user1_id, user2_id);
    const url = `${firebaseDatabaseURL}/chats/${chatId}/messages.json`;

    try {
        const response = await axios.get(url);
        if (response.data) {
            const messages = Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            }));

            return messages.reverse();
        } else {
            console.log('No messages found.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
};

export const fetchChatsForUser = async (userId: string) => {
    try {
        const user1ChatsUrl = `${firebaseDatabaseURL}/chats.json?orderBy="user1_id"&equalTo="${userId}"`;
        const user1Response = await axios.get(user1ChatsUrl);

        const user2ChatsUrl = `${firebaseDatabaseURL}/chats.json?orderBy="user2_id"&equalTo="${userId}"`;
        const user2Response = await axios.get(user2ChatsUrl);

        const allChats = {
            ...user1Response.data,
            ...user2Response.data
        };

        if (allChats) {
            const chats = await Promise.all(
                Object.keys(allChats).map(async (chatId) => {
                    const chat = allChats[chatId];

                    if (chat.user1_id === userId || chat.user2_id === userId) {
                        const otherUserId = chat.user1_id === userId ? chat.user2_id : chat.user1_id;

                        const otherUserData = await fetchBasicUserDataById(otherUserId);

                        const messages = chat.messages || {};
                        const lastMessage = Object.keys(messages).reduce((latest:any, messageId) => {
                            const message = messages[messageId];
                            console.log(latest)
                            if (!latest || message.timestamp > latest.timestamp) {
                                return message;
                            }
                            return latest;
                        }, null);

                        return {
                            chatId,
                            user1_id: chat.user1_id,
                            user2_id: chat.user2_id,
                            otherUserData,
                            lastMessage,
                        };
                    }
                    return null;
                })
            );
            return chats.filter((chat) => chat !== null);
        } else {
            console.log("No chats found.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching chats:", error);
        return [];
    }
};
