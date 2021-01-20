// tslint:disable:variable-name
import DateTimeFormat = Intl.DateTimeFormat;

export class FeedDetailItem {
    feed: {
        _id: string,
        user_id: string,
        body: string,
        created_at: DateTimeFormat,
        like_count: number,
        retweet_count: number,
        reply_count: number,
        quote_count: number,
        post_type: string,
        image: string,
        parent_id: {
            _id: string,
            user_id: string,
            body: string,
            created_at: DateTimeFormat,
            like_count: number,
            retweet_count: number,
            reply_count: number,
            quote_count: number,
            post_type: string,
            image: string
        }
    };
    children: {
        _id: string,
        user_id: string,
        body: string,
        created_at: DateTimeFormat,
        like_count: number,
        retweet_count: number,
        reply_count: number,
        quote_count: number,
        post_type: string,
        image: string,
        parent_id: {
            _id: string,
            user_id: string,
            body: string,
            created_at: DateTimeFormat,
            like_count: number,
            retweet_count: number,
            reply_count: number,
            quote_count: number,
            post_type: string,
            image: string
        }
    };
    author_profile_pic: string;
    author_name: string;
    is_liked: boolean;
    is_retweeted: boolean;
    parent_info: {
        parent_name: string;
        parent_profile_pic: string;
    };
}
