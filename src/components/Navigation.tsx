const Navigation = () => {
  return (
    <nav className="flex justify-between py-8 sm:flex-col sm:py-0">
      <div className="w-10 h-10 sm:w-16 sm:h-16 bg-foreground rounded-full" />
      <ul className="flex flex-col gap-4 text-sm text-right">
        <li className="pr-1">About me</li>
        <li className="pr-1">Contacts</li>
      </ul>
    </nav>
  );
};
export default Navigation;
