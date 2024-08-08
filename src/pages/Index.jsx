import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Moon, Sun } from 'lucide-react';

const FloatingCard = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 }
    });
  }, [controls]);

  return (
    <motion.div animate={controls}>
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'
    }`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>
      <FloatingCard>
        <Card className={`w-96 ${isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-20'} backdrop-blur-lg rounded-xl shadow-xl`}>
          <CardContent className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Welcome to Your Fancy App</h1>
            </motion.div>
            <motion.p
              className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-white'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Let's build something amazing together!
            </motion.p>
            <div className="flex justify-center space-x-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setCount(count + 1)}
                  className={`${isDarkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-purple-600 hover:bg-purple-100'}`}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Click me! ({count})
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={toggleDarkMode}
                  className={`${isDarkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </FloatingCard>
    </div>
  );
};

export default Index;
