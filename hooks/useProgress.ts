import { createContext, useContext, useState } from 'react';

interface ProgressContextProps {
    progress: number;
    setProgress: (progress: number) => void;
}

const ProgressContext = createContext<ProgressContextProps | undefined>(undefined);

export const useProgress = (): ProgressContextProps => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};

export const ProgressProvider = () => {
    const [progress, setProgress] = useState(0);

    return { progress, setProgress };
};
