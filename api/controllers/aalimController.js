import aalim from '../models/aalim.js';

// @access  Public
export default getAalim = async (req, res) => {
  try {
    // Database se saare scholars fetch karein
    const scholars = await aalim.find().sort({ createdAt: -1 });
    
    // Success Response
    res.status(200).json({
      success: true,
      count: scholars.length,
      data: scholars
    });
  } catch (error) {
    console.error(`Error in getAllScholars: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch scholars'
    });
  }
};

// @desc    Add a new scholar (For Admin/Postman onboarding)
// @route   POST /api/scholars
// @access  Private/Admin
// const createScholar = async (req, res) => {
//   try {
//     const { name, expertise, qualification, whatsapp, availableTime } = req.body;

//     // Basic validation check
//     if (!name || !expertise || !qualification || !whatsapp || !availableTime) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide all required fields'
//       });
//     }

//     // Phone number sanitization (bina spaces aur symbols ke save karein)
//     const sanitizedWhatsapp = whatsapp.replace(/[^\d]/g, '');

//     const newScholar = await Scholar.create({
//       name,
//       expertise,
//       qualification,
//       whatsapp: sanitizedWhatsapp,
//       availableTime
//     });

//     res.status(201).json({
//       success: true,
//       message: 'Scholar registered successfully',
//       data: newScholar
//     });
//   } catch (error) {
//     console.error(`Error in createScholar: ${error.message}`);
//     res.status(500).json({
//       success: false,
//       message: 'Server Error: Could not save scholar'
//     });
//   }
// };

// module.exports = {
//   getAllScholars,
//   createScholar
// };