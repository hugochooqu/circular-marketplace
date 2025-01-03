'use client';

import React, { useState } from "react";

const CustomForm = ({ initialValues, onSubmit, fields, onClose }) => {
    const [formData, setFormData] = useState(initialValues);
    const [wordCount, setWordCount] = useState({});

const handleTextAreaChange = (e, maxWords) => {
  const { name, value } = e.target;
  const words = value.trim().split(/\s+/); // Split text into words
  if (words.length <= maxWords) {
    setWordCount((prev) => ({ ...prev, [name]: words.length }));
    handleChange(e); // Update the form's state
  }
};
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => {
          // Conditionally render based on field condition
          if (field.condition && !field.condition(initialValues)) {
            return null;
          }
          return (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="font-semibold mb-1">
                {field.label}
              </label>
              {field.type === 'textarea'
              ?
              <div>
              <textarea 
              name={field.name}
              rows={field.attributes.rows}
              style={field.attributes.style}
              defaultValue={initialValues[field.name]}
              onChange={(e) => handleTextAreaChange(e, field.maxWords)}
              className="border rounded-md p-2 w-full"
              />
               <p className="text-sm text-gray-500">
          {wordCount[field.name] || 0}/{field.maxWords} words
        </p>
              </div>
              :
              <input
                id={field.name}
                name={field.name}
                type={field.type || "text"}
                value={formData[field.name] || ""}
                onChange={handleChange}
                disabled={field.disabled}
                className={`border rounded-md p-2 w-full ${
                  field.disabled
                    ? "bg-gray-100"
                    : "focus:outline-none focus:ring-2 focus:ring-green-500"
                }`}
              />}
              
            </div>
          );
        })}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black p-2 rounded-md font-semibold hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md font-semibold hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    );
  };

  export default CustomForm;
  