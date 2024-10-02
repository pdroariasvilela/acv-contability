import { Card } from "flowbite-react";

interface Feature {
  name: string;
  included: boolean;
}

interface PricesProps {
  title: string;
  price: number;
  period: string;
  features: Feature[];
  buttonText: string;
}

export function Prices({ title, price, period, features, buttonText }: PricesProps) {
  return (
    <Card className='my-4 flex max-w-sm p-4'>
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{title}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{period}</span>
      </div>
      <ul className="my-7 space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="flex space-x-3">
            <svg
              className="size-5 shrink-0 text-red-500" // Cambié el color a naranja como en la imagen
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{feature.name}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-navy-600 px-5 py-2.5 text-center bg-red-600 text-sm font-medium text-white hover:bg-navy-700 focus:outline-none focus:ring-4 focus:ring-navy-200 dark:focus:ring-navy-900"
      >
        {buttonText}
      </button>
    </Card>
  );
}