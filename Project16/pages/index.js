import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/La_Habana_Cuba.jpg/1280px-La_Habana_Cuba.jpg',
        address: 'Some Address 1, 12345 Habanna',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/La_Habana_Cuba.jpg/1280px-La_Habana_Cuba.jpg',
        address: 'Some Address 2, 12345 Habanna',
        description: 'This is a second meetup',
    },
    {
        id: 'm3',
        title: 'A third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/La_Habana_Cuba.jpg/1280px-La_Habana_Cuba.jpg',
        address: 'Some Address 3, 12345 Habanna',
        description: 'This is a third meetup',
    },
];

function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups!"
                />
            </Head>
            <MeetupList meetups={props.meetupsStatic} />
        </>
    );
}

// export async function getServerSideProps(context) {
//     const req = context.req; // Advance NextJS
//     const re = context.res; // Response
//     // fetch data from an API
//     return {
//         props: {
//             meetupsStatic: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    // Only executed on build process, not to the client load
    const client = await MongoClient.connect(
        'mongodb+srv://NBCharroNext:Mayority@cluster0.ocfqi.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetupsStatic: meetups.map((meet) => ({
                title: meet.title,
                address: meet.address,
                image: meet.image,
                description: meet.description,
                id: meet._id.toString(),
            })),
        },
        revalidate: 10,
    };
}

export default HomePage;
