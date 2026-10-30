export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {year} | Anisa Chokwenda | All rights reserved</p>
      </div>
    </footer>
  );
}