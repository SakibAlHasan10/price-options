import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Phones = () => {
  const [open, setOpen] = useState(true);
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhone(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const createData = data.data.data;
        const phoneData = createData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phoneData);
        setPhone(phoneData);
        setOpen(false);
      });
  }, []);
  return (
    <div>
      {open && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <h2 className="text-3xl">Phone: {phone.length}</h2>
      <BarChart width={950} height={400} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
