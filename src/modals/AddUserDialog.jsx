import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

export const AddUserDialog = () => {
  const [userID, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserID(uuidv4());
  };

  useEffect(() => {
    const sendToFirebase = async () => {
      await setDoc(doc(db, "users/", userID), {
        email: userEmail,
        timeAdded: serverTimestamp(),
      });
      if (userEmail.length !== 0) {
        setUserEmail("");
      }
    };
    if (userEmail !== "") {
      try {
        sendToFirebase();
        toast.success(`Successfully added ${userEmail}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch {
        toast.error(`Error adding ${userEmail}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  return (
    <>
      <form class="absolute" onSubmit={handleSubmit}>
        <div
          data-te-modal-init
          class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="addUserDialog"
          tabindex="-1"
          aria-labelledby="addUserDialog"
          aria-modal="true"
          role="dialog"
        >
          <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
          >
            <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-gray-300 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  class="font-title text-xl font-bold leading-normal text-black"
                  id="addUserDialogLabel"
                >
                  Add User
                </h5>

                <button
                  type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div class="relative mx-5 my-2">
                <input
                  type="text"
                  class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-black transition duration-200 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-black focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="userEmailField"
                  placeholder="user@email.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label
                  for="userEmailField"
                  class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >
                  User Email
                </label>
              </div>

              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  class="inline-block rounded bg-gray-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-300"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="ml-1 inline-block rounded bg-green-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-3 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-3 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-3 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] disabled:bg-gray-500 dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  disabled={!userEmail}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  data-te-modal-dismiss
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
