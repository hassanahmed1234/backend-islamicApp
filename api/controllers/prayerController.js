import axios from 'axios';

export const getPrayerTimes = async (req, res) => {
  try {
    const { city, country } = req.query;
    

    const response = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
    );

    res.json(response.data.data.timings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prayer times' });
  }
};