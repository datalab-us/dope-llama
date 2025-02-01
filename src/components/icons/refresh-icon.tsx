type Props = {
  className?: string;
  onClick?: () => void;
};

export const RefreshIcon = ({ className, onClick }: Props) => {
  return (
    <svg
    onClick={onClick}
      className={className}
      width="69"
      height="63"
      viewBox="0 0 69 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.7535 0.218786C19.3727 0.218786 6.73187 11.9709 5.49987 26.9538H2.41666C1.93962 26.9536 1.47328 27.0952 1.07687 27.3606C0.680465 27.626 0.371889 28.0032 0.190342 28.4443C0.00879483 28.8855 -0.0375303 29.3706 0.0572514 29.8382C0.152033 30.3057 0.383644 30.7345 0.722662 31.0701L6.11266 36.4152C6.5633 36.8619 7.17214 37.1125 7.80666 37.1125C8.44118 37.1125 9.05002 36.8619 9.50066 36.4152L14.8907 31.0701C15.2297 30.7345 15.4613 30.3057 15.5561 29.8382C15.6509 29.3706 15.6045 28.8855 15.423 28.4443C15.2414 28.0032 14.9329 27.626 14.5365 27.3606C14.14 27.0952 13.6737 26.9536 13.1967 26.9538H10.3316C11.5508 14.6627 22.0035 5.03129 34.7535 5.03129C38.9572 5.02256 43.0928 6.09256 46.7648 8.13893C50.4368 10.1853 53.5224 13.1396 55.7263 16.7192C55.8876 16.997 56.1029 17.2396 56.3594 17.4329C56.616 17.6261 56.9086 17.766 57.2201 17.8444C57.5316 17.9227 57.8556 17.9379 58.173 17.8891C58.4904 17.8403 58.7949 17.7284 59.0684 17.56C59.3419 17.3917 59.579 17.1703 59.7656 16.9089C59.9522 16.6475 60.0846 16.3513 60.1549 16.038C60.2253 15.7246 60.2322 15.4003 60.1753 15.0842C60.1183 14.7681 59.9987 14.4666 59.8234 14.1975C57.1891 9.91848 53.5015 6.38655 49.113 3.93921C44.7244 1.49188 39.7783 0.210931 34.7535 0.218786ZM62.8649 26.5817C62.4145 26.1369 61.807 25.8875 61.1741 25.8875C60.5411 25.8875 59.9336 26.1369 59.4833 26.5817L54.0708 31.9267C53.7309 32.262 53.4984 32.6908 53.4028 33.1586C53.3073 33.6263 53.3531 34.112 53.5344 34.5536C53.7157 34.9953 54.0243 35.3731 54.4209 35.6389C54.8175 35.9047 55.2842 36.0465 55.7616 36.0462H58.6459C57.4203 48.3342 46.9323 57.9688 34.1214 57.9688C29.9045 57.9806 25.7548 56.9123 22.0678 54.8657C18.3807 52.8192 15.2792 49.8626 13.0587 46.2776C12.8927 46.0086 12.6753 45.7749 12.419 45.5899C12.1627 45.4049 11.8725 45.2722 11.5649 45.1993C11.2573 45.1265 10.9383 45.115 10.6263 45.1654C10.3142 45.2158 10.0151 45.3272 9.7461 45.4932C9.2028 45.8284 8.81493 46.3658 8.66782 46.987C8.52071 47.6083 8.62641 48.2625 8.96166 48.8058C11.6135 53.0894 15.3179 56.6227 19.7221 59.0691C24.1262 61.5154 29.0834 62.7934 34.1214 62.7813C49.5471 62.7813 62.2424 51.0388 63.4777 36.0462H66.5833C67.0608 36.0465 67.5275 35.9047 67.9241 35.6389C68.3207 35.3731 68.6293 34.9953 68.8105 34.5536C68.9918 34.112 69.0376 33.6263 68.9421 33.1586C68.8466 32.6908 68.614 32.262 68.2741 31.9267L62.8649 26.5817Z"
      />
    </svg>
  );
};
