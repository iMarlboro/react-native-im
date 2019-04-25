/**
 * Identity for '@all'.
 */
export const AtAll = '__at_all_message__';

/**
 * '@all' or '@a @b ...', is at members list.
 */
export type AtList = typeof AtAll | string[];

/**
 * Text message body.
 */
export interface TextBody extends Body {
    atMemberList: AtList;
    text: string;
    isSystem: boolean;
}

/**
 * Text message.
 */
export type Text = General<TextBody>;

/**
 * Image message body.
 */
export interface ImageBody extends Body {
    thumbnailLocalPath?: string;
    thumbnailRemotePath?: string;
    localPath?: string;
    remotePath?: string;
    size?: {
        width: number;
        height: number;
    };
}

/**
 * Image message.
 */
export type Image = General<ImageBody>;

/**
 * Voice message body.
 */
export interface VoiceBody extends Body {
    localPath: string;
    remotePath: string;
    duration: number;
}

/**
 * Voice message.
 */
export type Voice = General<VoiceBody>;

/**
 * Location message body.
 */
export interface LocationBody extends Body {
    latitude: number;
    longitude: number;
    address: string;
    name: string;
}

/**
 * Location message.
 */
export type Location = General<LocationBody>;

/**
 * Video message body.
 */
export interface VideoBody extends Body {
    localPath?: string;
    remotePath?: string;
    duration: number;
}

/**
 * Video message.
 */
export type Video = General<VideoBody>;

/**
 * File message body.
 */
export interface FileBody extends Body {
    localPath?: string;
    remotePath?: string;
    name: string;
    size: number;
}

/**
 * File message.
 */
export type File = General<FileBody>;