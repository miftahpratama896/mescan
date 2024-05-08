import React, { useEffect, useState } from "react";

const Machine11 = () => {
  const [data, setData] = useState(null);
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://172.16.206.4:3003");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (message) => {
      const responseData = JSON.parse(message.data);
      setData(responseData);
    };

    setWebSocket(socket);

    return () => {
      socket.close(); // Close WebSocket connection when component unmounts
    };
  }, []);

  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  console.log(data);
  return (
    <div className="py-6 bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-full px-6 lg:px-8 h-full">
        <div className="text-center">
          {data && (
            <h2
              className={`py-6 text-9xl font-bold tracking-tight ${data.Status === "OK"
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
        <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {data && (
            <>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">NO MACHINE</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">{data.NO_MC}</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">BARCODE</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">{data.BARCODE}</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">DATE</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">
                  {data && new Date(data?.TotalCounter.CUTT_PROCESS_DATE).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }).toUpperCase()}
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">TOTAL COUNTER BARCODE</dt>
                {data && data.AdditionalInfo && data.AdditionalInfo.SIZE !== undefined ? (
                  <dd className="text-5xl font-semibold tracking-tight text-white">
                    {data.AdditionalInfo3 && data.AdditionalInfo3[data.AdditionalInfo.SIZE] != null ? data.AdditionalInfo3[data.AdditionalInfo.SIZE] + 1 : 0}
                  </dd>
                ) : (
                  <dd className="text-5xl font-semibold tracking-tight text-white">
                    0
                  </dd>
                )}

              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">MODEL</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">{data.AdditionalInfo.MODEL}</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">COMPONENT</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">{data.AdditionalInfo.COMPONENT}</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">SIZE</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">{data.AdditionalInfo.SIZE}</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">COUNTER</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">{data.Counter}</dd>
              </div>
              <div className={`flex flex-col p-8 lg:col-span-4 ${data.TotalCounter.TOTAL_DAILY_ACTUAL + 1 > data.TotalCounter.TOTAL_DAILY_PLAN ? 'bg-green-500' : 'bg-white/5'}`}>
                <dt className="text-sm font-semibold leading-6 text-gray-300">TOTAL COUNTER</dt>
                {data.Counter !== 0 ? (
                  <dd className="text-5xl font-semibold tracking-tight text-white">
                    {data && data.TotalCounter.TOTAL_DAILY_ACTUAL + 1} / {data.TotalCounter.TOTAL_DAILY_PLAN}
                  </dd>
                ) : (
                  <dd className="text-5xl font-semibold tracking-tight text-white">0</dd>
                )}
              </div>
              <div className="flex flex-col bg-blue-500 p-8 lg:col-span-2">

                {/* Tombol Monitoring SPK */}
                <button
                  className="text-white rounded-md"
                  onClick={() => window.open('http://172.16.200.28:3001/DailyCutt', '_blank')}
                >
                  Monitoring SPK
                </button>
              </div>
              <div className="flex flex-col bg-blue-500 p-8 lg:col-span-2">
                <button
                  className=" text-white rounded-md"
                  onClick={() => window.open('http://172.16.200.28:3001/DailyBarcodeCutt', '_blank')}
                >
                  Monitoring Barcode
                </button>
              </div>
            </>
          )}
        </dl>
      </div>

    </div>
  );
};

export default Machine11;
