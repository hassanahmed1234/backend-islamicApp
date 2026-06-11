import Question from "../models/Quiz.js";


export const getQuiz = async (req, res) => {
  try {
        // Frontend se level query parameter get karein (?level=2)
        const { level } = req.query;

        if (!level) {
            return res.status(400).json({ 
                success: false, 
                message: "Level parameter missing hai." 
            });
        }

        // MongoDB Query: Sirf requested level ke questions fetch honge
        const filteredQuestions = await Question.find({ level: parseInt(level) })
                                                .select('-__v'); // Faltu mongoose fields hide krne k liye

        res.status(200).json({
            success: true,
            level: parseInt(level),
            totalQuestions: filteredQuestions.length,
            questions: filteredQuestions
        });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Server par koi masla hai.", 
            error: error.message 
        });
    }
};

