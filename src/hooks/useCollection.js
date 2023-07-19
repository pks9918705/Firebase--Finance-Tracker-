 

import { useEffect, useState } from "react";
import { ProjectFirestore } from "../config/firebaseConf";
import { collection, onSnapshot } from "firebase/firestore";

// Custom hook to interact with a Firestore collection
export const useCollection = (collectionName) => {
  // State to store the retrieved documents from the Firestore collection
  const [documents, setDocuments] = useState(null);
  // State to handle errors if any occur during data retrieval
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reference to the Firestore collection based on the provided 'collectionName' parameter
    const ref = collection(ProjectFirestore, collectionName);

    // Function to handle snapshot updates when data in the collection changes
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        // Loop through each document in the snapshot
        snapshot.docs.forEach((doc) => {
          // Extract the data from the document and add the 'id' property
          results.push({ ...doc.data(), id: doc.id });
        });
        // Update state with the retrieved documents
        setDocuments(results);
        // Clear any previous error in case the data fetch is successful
        setError(null);
      },
      (error) => {
        // Handle error if there's any issue with data retrieval
        console.log("Error:", error);
        setError("Could not fetch the data");
      }
    );

    // Function to unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, [collectionName]); // Re-run the effect whenever the 'collectionName' parameter changes

  // Return the retrieved documents and error state to be used in components
  return { documents, error };
};
