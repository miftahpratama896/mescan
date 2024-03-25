import React, { useEffect, useState } from "react";
import axios from "axios";
import OkayAudio from "../../Assets/Okay.mp3";
import ScanAudio from "../../Assets/Scan Barcode.mp3";

const Machine8 = () => {
  const [data, setData] = useState(null);
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://172.16.200.28:3003/data8");
        setData(response.data);
        if (response.data.Status === "OK") {
          playAudio(OkayAudio);
        } else if (response.data.Status === "SCAN BARCODE") {
          playAudio(ScanAudio);
        }
      } catch (error) {}
    };

    fetchData(); // Memuat data pertama kali saat komponen dipasang

    const intervalId = setInterval(() => {
      fetchData(); // Memuat data setiap 1 detik
    }, 1000);

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen dilepas
  }, []);

  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };
  console.log(data);
  return (
    <div className="bg-gray-900 py-24 sm:py-32 h-screen">
      <div className="mx-auto max-w-full px-6 lg:px-8 h-full">
        <div className="mx-auto max-w-2xl lg:max-w-none h-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              STATUS
            </h1>
            {data && (
              <h2
                className={`py-6 text-9xl font-bold tracking-tight sm:text-9xl ${
                  data.Status === "OK"
                    ? "text-green-500"
                    : data.Status === "SCAN BARCODE"
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {data.Status}
              </h2>
            )}
          </div>
          <dl className=" grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {data && (
              <>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    NO MACHINE
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.NO_MC}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    BARCODE
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.BARCODE}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    HOUR
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                      {currentHour < 10 ? "0" + currentHour : currentHour}:
                      {currentMinutes < 10
                        ? "0" + currentMinutes
                        : currentMinutes}
                    </dd>
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    TOTAL COUNTER
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.TotalCounter}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    MODEL
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.AdditionalInfo.MODEL}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    COMPONENT
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.AdditionalInfo.COMPONENT}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    SIZE
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.AdditionalInfo.SIZE}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    COUNTER
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    {data.Counter}
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Machine8;
