// WorkPage.jsx
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const workSamples = {
    'Project One': ['Brunch/Asset 24.jpg', 'Brunch/Asset 25.jpg', 'Brunch/Asset 26.jpg'],
    'Project Two': ['Brunch/Asset 27.jpg', 'Brunch/Asset 27.jpg', 'image6.jpg'],
    'Project Three': ['image7.jpg', 'image8.jpg', 'image9.jpg']
};

export default function WorkPage() {
    const [activeProject, setActiveProject] = useState(null);

    const handleMouseEnter = (project) => {
        setActiveProject(project);
    };

    const handleMouseLeave = () => {
        setActiveProject(null);
    };

    return (
        <div className='flex p-8 space-x-8'>
            <div className='flex flex-col space-y-4'>
                {Object.keys(workSamples).map((project) => (
                    <motion.div
                        key={project}
                        onMouseEnter={() => handleMouseEnter(project)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveProject(project)}
                        className='p-4 bg-gray-200 cursor-pointer rounded-lg shadow-md hover:bg-gray-300 transition'
                    >
                        {project}
                    </motion.div>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {activeProject && workSamples[activeProject].map((image, index) => (
                    <Card key={index} className='rounded-2xl shadow-lg'>
                        <CardContent>
                            <img src={image} alt='' className='w-full h-auto rounded-lg' />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// HTML file (index.html)
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work Page</title>
</head>
<body>
    <div id="root"></div>
    <script src="path/to/your/bundled/WorkPage.js"></script>
</body>
</html>
*/
