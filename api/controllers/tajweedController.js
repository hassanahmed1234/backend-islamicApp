import { TajweedRule, WordPool } from '../models/TajweedGame.js';


export const getGameData = async (req, res) => {
  try {
    
    // Database se dono collections ka data parallel fetch karein
    const [rules, words] = await Promise.all([
      TajweedRule.find({}),
      WordPool.find({})
    ]);

    res.status(200).json({
      success: true,
      rules,
      words
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: Game data fetch nahi ho saka.",
      error: error.message
    });
  }
};

