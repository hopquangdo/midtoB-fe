import { createSlice } from '@reduxjs/toolkit';

const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState: {
    rooms: [],
  },
  reducers: {
    addChatRoom(state, action) {
      const roomId = action.payload.roomId;
      const roomIndex = state.rooms.findIndex((room) => room.roomId === roomId);
      if (roomIndex === -1) {
        state.rooms = [...state.rooms, action.payload];
      }
    },
    updateRoom(state, action) {
      const { roomId, lastMessage } = action.payload;
      const roomIndex = state.rooms.findIndex(room => room.roomId == roomId);
      if (roomIndex !== -1) {
        const updatedRoom = state.rooms[roomIndex];
        state.rooms.splice(roomIndex, 1);
        state.rooms.unshift(updatedRoom);
        
        state.rooms[0].lastMessage = lastMessage;
      }
    }
    
  },
});

export const { addChatRoom, updateRoom } = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
