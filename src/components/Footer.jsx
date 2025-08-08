const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-300 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-700">European Cities Explorer</span> | Built for Sessami.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
