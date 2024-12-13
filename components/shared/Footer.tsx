import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-10 flex h-[28rem] w-full flex-col items-center justify-between p-12 pb-8">
      <Image
        src="/images/footer-bg.png"
        alt="footer"
        width={2024}
        height={2024}
        className="absolute right-0 top-0 z-0 size-full object-cover"
      />
      <div></div>
      <div className="flex-center z-10 w-full border-t border-light-300 pt-8 text-sm text-light-400">
        © 2024 Vanni Looks. All Rights Reserved. | Designed and Developed By
        Samson
      </div>
    </footer>
  );
};

export default Footer;
