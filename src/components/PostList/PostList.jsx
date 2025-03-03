import { Link } from 'react-router-dom';

const PostList = (props) => {
    return (
        <main>
            {props.posts.map((post) => {
                let display;

                if (post.nationality === "Bahraini") {
                    display = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAXVBMVEXaKRz////ZIhPYDQDxurfYAADZGwXaJhnoi4b64+HbLSD++fngU0v54N///PzaIxLgWVHhW1TgUknws7DrlI/aHwv98PDngXz43NvaGwHpj4vdPzX86+rywL7iYlvDWrMYAAAEIklEQVR4nO2dgU4bQQxE4yTABZKUFihNSvv/n9m7k2ArEXkPyeNoRn5/kKfNnM+33l1ZEA9P+5vbu5UiUYpGdsP9Zn3t3wMgUNG4lLb7jd5SClU0chg2akspWtHI9lErlQCKplRaCS0liKIplR5lUgmkyKZUOmksJZwiU0klqCKNVAIrUqiV4IpsSqVb5qWUoWhkS/wGl6SIOZXSFJkdSWulREVGmkq5iualdLr2b/4i2YpGnl+u/aO/Rrafw3Bfq8jhuP1O+OxPFLQbXviyepWn6GH7g3ABzeQIOtDWjasURWMCUZaM78AF7c6cCdTA+jnyJlADKYg6gRowP6wvrZ8BCdoNa4UFNIPwI5FAjXhBh+FOZgHNBPthr4EuESpoN3zTWkAzcX7EEqgRJejnq9ymmXeiFB1/adSJF4hSZNT9DpdARcbbNXOJVcTae3WJVmRzB19qKQEUzakkVEBCFI0cziJ71KD9IpVUAipS6alBFWmkEliRTbUSeSrhFRl7KqUo4p4ySlLEvHM2TZHR7ufPVGSc+/mTFU0fsH+TOUpXZG+vtZHPZfynkRnKVcQ5FZrnh/apnyWIuHbMEcT4rP8gwQ9nAjXQfmgTqIEVRJxADaQg7h7IBzA/hzN3AjUwfgQSqIEQJJFAjXhB1DXQJYL9kHbNXCL9SCVQI06QWAI1ogS97W82egtoJkqRHZkPdHAJU2TMBzq4RCpSmo35j1hFRnqgg0u4onkpSaUSQJFNqSQ0KoNRJHUkH0qRTamkMTQDVKRSK0EVmUQqoRUJ1Ep4RcaeSimKuOf5khQZ8VRoniLa2eJMRcY5oZ6saFxKf/6SOSpFXZIF1R/Np+K6Qz30fap07FAvID71GtuhmiE+1VLrwJ1ADZSfau93EEigBsBPfWrsUB+sfehroEtECqrNMz4aNdAlogzVRr4F1HbQBdSm4iXU1vQliBWONSazAIQisVTCKLIa2VtGDX4uQCKVsIokUgmtyOoog2VQ10o5iqhTKUsRcSrlKTLWVEpVZHVQ2CLquLkedWhhB8anf6Yf0n5bmh/aZ34d5twnRRB3VwTvpw6W96nrCTrUJRcduBOogfJTF+74aF0mBxBUl3/51BVyHeoiQh+tBGpE+alLUbvU1boLYJ7Kc4lTZMSznS6himgnhF2CFRnnnLlLvCK5VEIosimV1jJLCaRIaWIGpshUOmrgxqxEKmEV2fSBmv3NFq6Iv1ZKUGTkqZSjiLpTkqXIePttiYpYu7apimzu/Z+u/Zu/SLaikefayOcyvpfUKvKgPAoi0Q/ri22aIN6jIJIEMR8FkeGHMoEacD+8O2XfAQviTaAGVBDjXv3P4PyQ7tX/DMiP0IF8GEUKCdQACNJIoEa0H87ZTpdQP/w10CUCBTFPC3lE+Xl4In4Lc/kHSRtcW1PlTccAAAAASUVORK5CYII=" alt="Bahraini Flag" width="50" />;
                } else {
                    display = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_a_United_States_Foreign_Service_Officer.svg/2560px-Flag_of_a_United_States_Foreign_Service_Officer.svg.png" alt="Other Flag" width="50" />;
                }

                return (
                    <Link key={post._id} to={`/posts/${post._id}`}>
                        <article>
                            <header>
                                <h2>{post.name} is looking for a job in the field of {post.role}</h2>
                                <p>
                                    {post.author.username} posted on{" "}
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                            </header>
                            {display}
                        </article>
                    </Link>
                );
            })}
        </main>
    );
};

export default PostList;
