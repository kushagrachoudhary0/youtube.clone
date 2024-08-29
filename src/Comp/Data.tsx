import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import YoutubeData from './ytdata.json';
import Skelton from './skelton.tsx'
import Modal from './Modal.tsx';

interface Thumbnails {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
}

interface Snippet {
    thumbnails: Thumbnails;
    title: string;
    channelId: string;
    publishedAt: string;
    liveBroadcastContent: string;
    channelTitle: string;
    description: string;
}

interface Item {
    snippet: Snippet;
    kind: string;
    etag: string;
    id: { kind: string; videoId?: string; channelId?: string; playlistId?: string };
}

interface YoutubeDataType {
    kind: string;
    etag: string;
    items: Item[];
}

interface DataState {
    videos: Item[];
    hasMore: boolean;
    page: number; 
    isLoading: boolean;
    error?: string;
    selectedVideo: Item | null;
}

class Data extends Component<{}, DataState> {
    state: DataState = {
        videos: [],
        hasMore: true,
        page: 1,
        isLoading: false,
        selectedVideo: null 
    };    

    componentDidMount() {
        this.loadMoreData();
    }

    loadMoreData = () => {
        const { page, isLoading } = this.state;
        
        if (isLoading) return; 
        
        this.setState({ isLoading: true });
    
        setTimeout(() => {
            const itemsPerPage = 200; 
            const startIndex = (page - 1) * itemsPerPage;
            console.log(`Loading data from index ${startIndex}`);
    
            const totalItems = (YoutubeData as YoutubeDataType).items.length;
            if (startIndex >= totalItems) {
                this.setState({
                    hasMore: false,
                    isLoading: false
                });
                console.log('No more items to load.');
                return;
            }
    
            const newItems = (YoutubeData as YoutubeDataType).items.slice(startIndex, startIndex + itemsPerPage);
            console.log(`Loaded ${newItems.length} new items`);
    
            this.setState(prevState => ({
                videos: [...prevState.videos, ...newItems],
                hasMore: startIndex + itemsPerPage < totalItems,
                page: prevState.page + 1,
                isLoading: false
            }));
        }, 1500);
    };
    
    refresh = () => {
        this.setState({ isLoading: true, page: 1 }, () => {
            const itemsPerPage = 20; 
            const startIndex = (this.state.page - 1) * itemsPerPage;
            setTimeout(() => {
                try {
                    const newItems = (YoutubeData as YoutubeDataType).items.slice(startIndex, startIndex + itemsPerPage);
                    this.setState({
                        videos: newItems,
                        hasMore: true,
                        page: 2,
                        isLoading: false
                    });
                } catch (error) {
                    console.error("Error loading data:", error);
                    this.setState({
                        isLoading: false,
                        error: "Failed to load data"
                    });
                }
            }, 1500); 
        });
    };

    handleVideoClick = (video: Item) => {
        this.setState({ selectedVideo: video });
    };

    closeModal = () => {
        this.setState({ selectedVideo: null });
    };

    render() {
        const { videos, hasMore, isLoading, error, selectedVideo } = this.state;
        
        return (
            <div> 
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <InfiniteScroll
                    dataLength={videos.length} 
                    next={this.loadMoreData}
                    hasMore={hasMore}
                    loader={<Skelton/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    refreshFunction={this.refresh}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                >
                    <ul className='flex gap-2 flex-wrap'>
                        {videos.map((video) => (
                            <li
                                key={video.id.videoId}
                                className='w-[400px] h-auto border rounded-[20px] cursor-pointer'
                                onClick={() => this.handleVideoClick(video)}
                            >
                                <img
                                    className='w-[400px] h-[25vh] border rounded-t-xl'
                                    src={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title}
                                />
                                <div className='flex justify-start items-center gap-5 p-3'>
                                    <img
                                        className='w-[40px] h-[40px] border rounded-[50%]'
                                        src={video.snippet.thumbnails.default.url}
                                        alt={video.snippet.channelTitle}
                                    />
                                    <div className='w-[300px] '>
                                        <h2 className="font-semibold truncate">{video.snippet.title}</h2>
                                        <div className='flex gap-16'>
                                            <p className='text-gray-400'>{video.snippet.channelTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                   
                </InfiniteScroll>
                {selectedVideo && (
                        <Modal video={selectedVideo} onClose={this.closeModal}  />
                    )}
            </div>
        );
    }
}

export default Data;
