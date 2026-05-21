import Dua from "../models/dua.js";


export const getDua = async (req, res) => {
  try {
    const { cat } = req.query;
    

    // Database se dua find karna by ID
    const data = await Dua.find({ category: cat });
   


    // Agar dua nahi milti
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Dua not found"
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      data: data
    });

  } catch (error) {
    console.error("Error in getDua:", error.message);
    
    // Agar ID ka format galat ho (Mongoose CastError)
    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: "Invalid Dua ID format"
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error: Could not fetch dua"
    });
  }
};

