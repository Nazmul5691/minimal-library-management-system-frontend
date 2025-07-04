export default function Form() {
    return (
        <div className="group mx-auto flex w-full max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900">
            <form className="flex-1 p-8">
                <h1 className="pb-6 text-xl font-semibold tracking-tight">Contact Form</h1>
                <div className="space-y-5">
                    {/* Name Field */}
                    <div className="relative text-sm">
                        <input
                            className="peer/name block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            type="text"
                            placeholder=""
                            id="navigate_ui_name_33"
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/name:top-3 peer-placeholder-shown/name:bg-transparent peer-placeholder-shown/name:text-sm peer-placeholder-shown/name:text-zinc-400 peer-focus/name:-top-2 peer-focus/name:bg-blue-300 peer-focus/name:text-xs peer-focus/name:text-blue-600"
                            htmlFor="navigate_ui_name_33"
                        >
                            Name
                        </label>
                    </div>
                    {/* Company Name Field */}
                    <div className="relative text-sm">
                        <input
                            className="peer/company block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            type="text"
                            placeholder=""
                            id="navigate_ui_company_33"
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/company:top-3 peer-placeholder-shown/company:bg-transparent peer-placeholder-shown/company:text-sm peer-placeholder-shown/company:text-zinc-400 peer-focus/company:-top-2 peer-focus/company:bg-blue-300 peer-focus/company:text-xs peer-focus/company:text-blue-600"
                            htmlFor="navigate_ui_company_33"
                        >
                            Company Name
                        </label>
                    </div>
                    {/* Email Field */}
                    <div className="relative text-sm">
                        <input
                            className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            type="email"
                            placeholder=""
                            id="navigate_ui_email_33"
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                            htmlFor="navigate_ui_email_33"
                        >
                            Email
                        </label>
                    </div>
                    {/* Phone Field */}
                    <div className="relative text-sm">
                        <input
                            className="peer/phone block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            type="tel"
                            placeholder=""
                            id="navigate_ui_phone_33"
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/phone:top-3 peer-placeholder-shown/phone:bg-transparent peer-placeholder-shown/phone:text-sm peer-placeholder-shown/phone:text-zinc-400 peer-focus/phone:-top-2 peer-focus/phone:bg-blue-300 peer-focus/phone:text-xs peer-focus/phone:text-blue-600"
                            htmlFor="navigate_ui_phone_33"
                        >
                            Phone
                        </label>
                    </div>
                    {/* Message Field */}
                    <div className="relative text-sm">
                        <textarea
                            className="peer/message block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            placeholder=""
                            id="navigate_ui_message_33"
                            
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/message:top-3 peer-placeholder-shown/message:bg-transparent peer-placeholder-shown/message:text-sm peer-placeholder-shown/message:text-zinc-400 peer-focus/message:-top-2 peer-focus/message:bg-blue-300 peer-focus/message:text-xs peer-focus/message:text-blue-600"
                            htmlFor="navigate_ui_message_33"
                        >
                            Message
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md uppercase border border-blue-400 px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 text-blue-700 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}




