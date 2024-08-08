import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="w-96 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl">
        <CardContent className="p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Your Fancy App</h1>
          </motion.div>
          <motion.p
            className="text-xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Let's build something amazing together!
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setCount(count + 1)}
              className="bg-white text-purple-600 hover:bg-purple-100"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Click me! ({count})
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
