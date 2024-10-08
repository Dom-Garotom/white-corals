import { dataBase } from "@/db";

export default function handler(req, res) {
  const { id } = req.query;

  

  const allData = dataBase;
  const filteredData = allData.find(item => item.id === id);


  if (filteredData){
    res.status(200).json(filteredData);
  } else if (allData){
    res.status(200).json(allData);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
}