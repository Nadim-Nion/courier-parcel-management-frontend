import React, { useEffect, useState } from "react";
import axios from "axios";

const Customer = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/parcels");
        setParcels(res.data.data);
      } catch (error) {
        console.error("Error fetching parcels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParcels();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Dashboard</h2>

      {loading ? (
        <div className="text-center">Loading parcels...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {parcels.map((parcel) => (
            <div
              key={parcel._id}
              className="bg-white shadow-md rounded-xl p-4 border"
            >
              <h3 className="font-bold text-lg mb-1">
                Parcel ID: {parcel._id.slice(-6)}
              </h3>
              <p>
                <span className="font-semibold">Pickup:</span>{" "}
                {parcel.pickupAddress}
              </p>
              <p>
                <span className="font-semibold">Delivery:</span>{" "}
                {parcel.deliveryAddress}
              </p>
              <p>
                <span className="font-semibold">Size:</span> {parcel.size}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{" "}
                {parcel.paymentType}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {parcel.status}
              </p>
              <p className="text-sm text-gray-900 mt-2">
                Assigned Agent: {parcel.agent?.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Customer;
