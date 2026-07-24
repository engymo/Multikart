import Image from "next/image";

const SecureCheckout = () => {
  return (
    <fieldset className="relative mt-8 border border-dashed border-[#ddd] px-5 pb-5 pt-4">
      <legend className="px-2 text-[16px] font-semibold text-[#232323]">
        Secure Checkout
      </legend>

      <div className="flex items-center">
        <Image
          src="/images/payments.png"
          alt="Secure Checkout"
          width={300}
          height={40}
          className="h-auto w-auto"
        />
      </div>
    </fieldset>
  );
};

export default SecureCheckout;