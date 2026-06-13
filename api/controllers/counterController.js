import {Counter} from "../models/Counter.js";


export const getCount = async (req, res) => {
try {
    let counterDoc = await Counter.findOne();
    
    if (!counterDoc) {
      counterDoc = await Counter.create({ totalCount: 0 });
    }
    
    return res.status(200).json({ totalCount: counterDoc.totalCount });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const plusCount = async (req, res) => {
try {
   
    
    const updatedCounter = await Counter.findOneAndUpdate(
      {},
      { $inc: { totalCount: 1 }, lastUpdated: new Date() },
      { new: true, upsert: true }
    );

    return res.status(200).json({ totalCount: updatedCounter.totalCount });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

