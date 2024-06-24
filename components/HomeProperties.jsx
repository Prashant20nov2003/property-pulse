import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

const HomeProperties = async () => {
  try {
    const data = await fetchProperties();
    
    // Check if data.properties exists before proceeding
    if (!data ||!data.properties) {
      return (
        <>
          <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto'>
              <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>No Properties Available</h2>
            </div>
          </section>
        </>
      );
    }

    const recentProperties = data.properties
     .sort(() => Math.random() - Math.random()) // Shuffle array
     .slice(0, 3); // Select first three items

    return (
      <>
        <section className='px-4 py-6'>
          <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>Recent Properties</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {recentProperties.length === 0? (
                <p>No Properties Found</p>
              ) : (
                recentProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))
              )}
            </div>
          </div>
        </section>

        <section className='m-auto max-w-lg my-10 px-6'>
          <Link href='/properties' passHref>
            <a className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'>
              View All Properties
            </a>
          </Link>
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return (
      <>
        <section className='px-4 py-6'>
          <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-red-500 mb-6 text-center'>Error Loading Properties</h2>
          </div>
        </section>
      </>
    );
  }
};

export default HomeProperties;
