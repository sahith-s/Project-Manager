export default function Button({ onClick ,children ,...props }) {
    return (
        <button onClick={onClick} {...props} className="bg-gradient-to-r from-gray-800 to-black text-white py-2 px-4 rounded hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            {children}
        </button>
    )
}