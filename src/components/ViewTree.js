import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTree = () => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    fetchTree();
  }, []);

  const fetchTree = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/tree');
      setTreeData(response.data);
    } catch (error) {
      console.error('Error fetching tree data:', error);
    }
  };

  // Function to recursively render user tree
  const renderTree = (tree, level = 0) => {
    return (
      <ul className={level === 0 ? "mlm-level-1 flex flex-wrap" : "mlm-level"}>
        {tree.map(({ user, children }) => (
          <li key={user._id} className={level === 0 ? "mr-8 mb-8" : "mr-8"}>
            <div className="mlm-node relative">
              <div className="mlm-node-content bg-white rounded-full w-24 h-24 flex justify-center items-center shadow-md border border-blue-500">
                {user.name} ({user.referralCode})
              </div>
              {children.length > 0 && (
                <>
                  <div className="absolute left-1/2 bottom-0 h-full w-px bg-blue-500 transform translate-x-1/2"></div>
                  <div className="mlm-arrow"></div>
                  {renderTree(children, level + 1)}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center mb-4">MLM Tree</h2>
      <div className="mlm-tree flex justify-center">
        {renderTree(treeData)}
      </div>
    </div>
  );
};

export default ViewTree;
