import Notification from "../models/Notification.js";


// GET ALL ACTIVE NOTIFICATIONS
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      active: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// ADD NEW NOTIFICATION
// export const addNotification = async (req, res) => {
//   try {
//     const { title, message, type } = req.body;

//     const newNotification = await Notification.create({
//       title,
//       message,
//       type,
//     });

//     res.status(201).json({
//       success: true,
//       newNotification,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };