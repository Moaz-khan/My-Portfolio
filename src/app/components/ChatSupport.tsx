import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Send, X } from "lucide-react";

export function ChatSupport() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            console.log("Sending message:", message);
            setMessage("");
        }
    };

    return (
        <div className="fixed bottom-6 left-6 md:bottom-10 md:right-10 md:left-auto z-[100] flex flex-col items-start md:items-end">
            {/* Chat Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="mb-4 w-[320px] sm:w-[350px] bg-background border border-border rounded-3xl overflow-hidden shadow-2xl grain-texture relative"
                        style={{
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                        }}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-serif italic font-bold text-foreground leading-tight">
                                    Need Help?
                                </h3>
                                <p className="text-sm text-muted-foreground">Let's Chat</p>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Body (Dummy) */}
                        <div className="p-6 h-48 overflow-y-auto flex flex-col justify-end space-y-4">
                            <div className="bg-muted p-3 rounded-2xl rounded-bl-none max-w-[80%] text-sm text-foreground">
                                Hi! How can I help you today?
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 border-t border-border flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-1 px-4 py-2 bg-input-background border border-border rounded-full text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            />
                            <button
                                type="submit"
                                className="p-2 bg-accent text-accent-foreground rounded-full hover:scale-105 transition-all shadow-lg active:scale-95"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-accent text-accent-foreground shadow-2xl cursor-pointer relative z-10"
                style={{
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
                }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
