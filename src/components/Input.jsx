
export default function Input({ label,...props }) {
    return (
        <>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {props.textregion ? (
            <textarea
                className="w-full p-3 bg-gray-100 border border-gray-300 shadow-sm"
                {...props}
            />
        ) : (
            <input
                className="w-full p-3 bg-gray-100 border border-gray-300 shadow-sm"
                {...props}
            />
        )}
        </>
    );
}