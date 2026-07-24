import Image from "next/image";

const SafeCheckout = () => {
    return (
        <div className="mt-8">
            <fieldset className="relative mt-8 border border-dashed border-[#ddd] px-5 pb-5 pt-4">
                <legend className="px-2 text-[16px] font-semibold text-[#232323]">
                    Guaranteed Safe Checkout
                </legend>

                <Image
                    src="/images/secure_payments.png"
                    alt="Guaranteed Safe Checkout"
                    width={300}
                    height={40}
                />
            </fieldset>
        </div>
    );
};

export default SafeCheckout;