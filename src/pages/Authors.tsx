
import { PencilRuler, BookOpen, Twitter, Globe } from 'lucide-react';

interface Author {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  bookCount: number;
  socials?: {
    twitter?: string;
    website?: string;
  };
}

const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Jane Austen',
    bio: 'An English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.',
    imageUrl: 'https://placehold.co/120x120/8b5cf6/ffffff?text=J.A.', 
    bookCount: 6,
    socials: {
      twitter: 'https://twitter.com/janeausten',
      website: 'https://janeausten.org/'
    }
  },
  {
    id: '2',
    name: 'George Orwell',
    bio: 'An English novelist, essayist, journalist, and critic whose work is characterised by lucid prose, biting social criticism, opposition to totalitarianism, and outspoken support of democratic socialism.',
    imageUrl: 'https://placehold.co/120x120/6366f1/ffffff?text=G.O.', 
    bookCount: 9,
    socials: {
      twitter: 'https://twitter.com/georgeorwell',
    }
  },
  {
    id: '3',
    name: 'Agatha Christie',
    bio: 'An English writer known for her sixty-six detective novels and fourteen short story collections, particularly those featuring Hercule Poirot and Miss Marple.',
    imageUrl: 'https://placehold.co/120x120/a855f7/ffffff?text=A.C.',
    bookCount: 85,
    socials: {
      website: 'https://www.agathachristie.com/'
    }
  },
  {
    id: '4',
    name: 'Harper Lee',
    bio: 'An American novelist best known for her 1960 novel To Kill a Mockingbird, which won the 1961 Pulitzer Prize.',
    imageUrl: 'https://placehold.co/120x120/4f46e5/ffffff?text=H.L.',
    bookCount: 2,
  },
  {
    id: '5',
    name: 'F. Scott Fitzgerald',
    bio: 'An American novelist, essayist, and short story writer. He is best known for his novels detailing the jazz age, most famously The Great Gatsby.',
    imageUrl: 'https://placehold.co/120x120/c026d3/ffffff?text=F.S.F.',
    bookCount: 5,
  },
  {
    id: '6',
    name: 'Gabriel Garcia Marquez',
    bio: 'A Colombian novelist, short-story writer, screenwriter, and journalist, known for his novels such as One Hundred Years of Solitude.',
    imageUrl: 'https://placehold.co/120x120/8e29a8/ffffff?text=G.G.M.',
    bookCount: 15,
  }
];

export default function Authors() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 pt-24 pb-16">
      {/* Authors Grid Section */}
      <section className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-10 text-indigo-600">
          <PencilRuler className="w-10 h-10 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Storytellers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAuthors.map((author) => (
            <div
              key={author.id}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl border border-gray-100"
            >
              <img
                src={author.imageUrl}
                alt={author.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-purple-300 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {author.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                {author.bio}
              </p>

              <div className="flex items-center text-indigo-700 mb-4">
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="font-semibold">{author.bookCount} Books</span>
              </div>

              {/* Social Links / External Links */}
              <div className="flex space-x-4 mt-auto"> {/* mt-auto pushes them to the bottom */}
                {author.socials?.twitter && (
                  <a
                    href={author.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                    aria-label={`${author.name}'s Twitter`}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {author.socials?.website && (
                  <a
                    href={author.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-500 transition-colors"
                    aria-label={`${author.name}'s Website`}
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action - Optional, but good for completeness. Remove if not needed. */}
      <section className="text-center py-12 mt-16 mx-auto px-6 bg-purple-50 rounded-2xl shadow-inner border border-purple-100 max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Can't find your favorite author?</h2>
        <p className="text-lg text-purple-700 mb-8">
          Let us know, and we'll try to add more of their works!
        </p>
        <a
          href="/contact" // Link to your contact page
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}