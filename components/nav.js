import Link from "next/link";

const links = [
  {
    href: "https://github.com/andreaskeller/react-cloudinary",
    label: "GitHub",
  },
  {
    href: "https://andreaskeller.name/blog/react-upload-images-cloudinary",
    label: "Docs",
  },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="btn-blue no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
