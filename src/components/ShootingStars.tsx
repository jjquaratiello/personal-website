const ShootingStars: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Shooting Stars */}
            {Array.from({ length: 20 }, (_, i) => (
                <div
                    key={i}
                    className={`absolute w-1 h-1 bg-white rounded-full shadow-lg 
                                animate-shooting`}
                    style={{
                        top: `${Math.random() * -20}vh`, // Start above the viewport
                        left: `${100 + Math.random() * 50}vw`, // Start to the right of the viewport
                        animationDelay: `${i * 0.5}s`, // Staggered animation
                        animationDuration: `${Math.random() * 3 + 5}s`, // Randomize duration
                    }}
                />
            ))}
        </div>
    );
};

export default ShootingStars;
