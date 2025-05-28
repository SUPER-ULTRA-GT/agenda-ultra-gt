const Container = ({ children }) => {
    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
        {children}
        </div>
    );
};

export default Container;