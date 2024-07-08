export default function ProfilePage() {
  return (
    <div className="col-span-9 shadow-lg rounded-lg border-2 px-6 pt-5 pb-7">
      <div className="text-lg font-bold capitalize mb-6 underline w-full underline-offset-8 ">
        Profile information
      </div>
      <div className="space-y-4 ">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label for="first">First name</label>
            <input type="text" name="first" id="first" className="input-box" />
          </div>
          <div>
            <label for="last">Last name</label>
            <input type="text" name="last" id="last" className="input-box" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label for="birthday">Birthday</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="input-box"
            />
          </div>
          <div>
            <label for="gender">Gender</label>
            <select name="gender" id="gender" className="input-box">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" className="input-box" />
          </div>
          <div>
            <label for="phone">Phone number</label>
            <input type="text" name="phone" id="phone" className="input-box" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
        >
          save changes
        </button>
      </div>
    </div>
  );
}
