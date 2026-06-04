// controllers/storyController.js

import Story from "../models/Story.js";


// CREATE STORY
// export const createStory = async (req, res) => {
//   try {
//     const {
//       title,
//       subtitle,
//       duration,
//       lessons,
//       color,
//       points,
//       youtubeVideoId,
//       image,
//       isFeatured,
//     } = req.body;

//     const story = await Story.create({
//       title,
//       subtitle,
//       duration,
//       lessons,
//       color,
//       points,
//       youtubeVideoId,
//       image,
//       isFeatured,
//     });

//     res.status(201).json({
//       success: true,
//       story,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// GET ALL STORIES
export const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      stories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// GET FEATURED STORIES
// export const getFeaturedStories = async (req, res) => {
//   try {
//     const stories = await Story.find({
//       isFeatured: true,
//     });

//     res.json({
//       success: true,
//       stories,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// GET SINGLE STORY
export const getSingleStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }

    res.json({
      success: true,
      story,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// DELETE STORY
// export const deleteStory = async (req, res) => {
//   try {
//     await Story.findByIdAndDelete(req.params.id);

//     res.json({
//       success: true,
//       message: "Story deleted",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };