// import { FormEvent, useState } from "react";

// const UseStateForm = () => {
//   //Interface create for user input
//   interface Person {
//     name: string;
//     age: number;
//   }

//   const [user, setUser] = useState<Person>({ name: "", age: 0 });

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(user);
//   };
//   return (
//     <>
//       <div>UseStateForm</div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="enter your name"
//           value={user?.name}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev, name: e.target.value }))
//           }
//         />
//         <br />
//         <input
//           type="number"
//           name="age"
//           placeholder="enter your age"
//           value={user?.age}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
//           }
//         />
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </>
//   );
// };

// export default UseStateForm;

//@ best practice

import { useState } from "react";

// 1. Define form values type for TypeScript type safety
type FormValues = {
  name: string;
  age: string; // Stored as string to avoid NaN issues with empty inputs
};

const UserForm = () => {
  // 2. State management with proper typing
  const [values, setValues] = useState<FormValues>({ name: "", age: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * 3. Unified change handler for all inputs
   * - Uses input's name attribute to update corresponding state
   * - More scalable than individual handlers for each field
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * 4. Form submission with proper async handling
   * - Prevents default form behavior
   * - Tracks submission state
   * - Includes error handling
   * - Resets form on success
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 5. Early return if already submitting (prevent duplicate submissions)
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // 6. Prepare payload with proper type conversion
      const payload = {
        name: values.name.trim(), // Trim whitespace from name
        age: Number(values.age), // Convert age to number
      };

      console.log("Submitting:", payload);

      // 7. Simulate API call (replace with actual API call in production)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 8. Success handling
      alert("Form submitted successfully!");
      setValues({ name: "", age: "" }); // Reset form
    } catch (error) {
      // 9. Error handling (would include proper error logging in production)
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      // 10. Ensure loading state is always reset
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* 11. Accessible form labeling */}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required // 12. Basic HTML validation
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            min="0" // 13. Minimum value validation
            value={values.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* 14. Disabled state during submission */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
