# REAL-TIME COLLABORATIVE DOCUMENT EDITOR


DocConnect is a real-time collaborative document editor designed to allow multiple users to edit and view the same document simultaneously. The application focuses on seamless collaboration, low-latency updates, and a simple, user-friendly interface, making it ideal for teamwork, coding interviews, and collaborative learning.

The frontend of DocConnect is built using React.js, providing a responsive and dynamic user experience. Users can create a new room or join an existing one using a unique Room ID. Each participant enters a username, which is displayed in the members list once they join the session. Navigation is handled using React Router, and notifications such as user join/leave events are shown using React Hot Toast.

For the editor itself, CodeMirror is used to provide a powerful text editing experience, including syntax highlighting, bracket matching, and customizable themes. Changes made by one user are instantly reflected for all connected users, ensuring real-time synchronization of the document content.

The backend is developed using Node.js and Express.js, with Socket.IO enabling real-time, bi-directional communication between the server and connected clients. WebSockets are used to efficiently broadcast code and cursor updates to all users in the same room. The server manages room-based connections and tracks active users, ensuring smooth collaboration and proper handling of user disconnects.

DocConnect follows a room-based architecture, where each room represents a shared editing session. When a user joins or leaves a room, all participants are notified instantly. The application also includes features such as copying the Room ID, downloading the edited file, and safely handling unexpected disconnections.

Overall, DocConnect demonstrates practical implementation of real-time systems, WebSocket communication, and modern frontend-backend integration. It showcases how collaborative tools like Google Docs work internally, making it a strong example of real-world full-stack application development.


Output:

<img width="1913" height="970" alt="Image" src="https://github.com/user-attachments/assets/822a28f1-ce91-4242-8f77-ce6e5f8caa3b" />
<img width="1911" height="971" alt="Image" src="https://github.com/user-attachments/assets/fc0fac9c-d440-4fb5-a577-d96c27f7a9da" />
<img width="1907" height="965" alt="Image" src="https://github.com/user-attachments/assets/182cd4b7-6561-404f-8185-5544a08f90a5" />
