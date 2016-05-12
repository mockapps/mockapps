package com.haoyaoge;


public class HaoyaogeException extends RuntimeException{
    public HaoyaogeException(){super();}
    public HaoyaogeException(String msg){
        super(msg);
    }
    public HaoyaogeException(String msg,Throwable t){
        super(msg,t);
    }
}
