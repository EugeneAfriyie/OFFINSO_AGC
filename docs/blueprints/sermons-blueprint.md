# Blueprint: Sermons & Media Center

## Page Overview
* **Purpose**: Provide search, filtering, streaming, and audio playback for all Sunday messages.
* **Target Users**: Members rewatching messages and seekers evaluating preaching style.
* **Main Goal**: Provide seamless 24/7 access to spiritual teaching.

## Structure
1. `/watch`: Live stream broadcast hub & 24/7 media portal.
2. `/sermons`: Filterable sermon archive (Series, Speaker, Topic).
3. `/sermons/[id]`: Single sermon video/audio player, transcript, study notes download.

## Technical Specification
* **Media Engine**: Persistent `AudioPlayerContext` allowing playback across route changes.
* **SEO**: `VideoObject` schema for video snippet indexing.
