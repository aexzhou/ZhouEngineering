# PROJECT HOME
To find projects, please use the **project directory** on the left. 

Coming soon, this page will be full of links that guides you through the project categories more efficiently.

## CODE BLOCK TEST 1

```c
int lengthOfLongestSubstring(char* s) {
    // this needs to memorize the past chars it has encountered
    int start = 0;
    int maxlen = 0;
    int mem[256]; // for 256 ascii chars, to store where they were last seen on string s.
    for(int i=0;i<256;i++){
        mem[i] = -1; //init all vals of mem to -1 to use as hash map
    }

    for(int i=0;s[i]!='\0';i++){
        int curr = (unsigned char)s[i]; //get current char
        if(mem[curr]>=start){ //checks the index where this char was last seen
            start = mem[curr]+1; //if seen, override start index with the position one after the last seen's pos
        }
        mem[curr] = i; //update mem since we've just now seen this char.
        int currlen = i - start + 1; //get curr len of unique chars
        if(currlen > maxlen){
            maxlen = currlen; //maxer
        }
    }

    return maxlen;
}
```
## CODE BLOCK TEST 2

```myasm
R1 = 0x03
R2 = 0x04
mov a, R1
add a, R2
mov R3, R2 LSL #2
```

## THE MAKING OF THIS SITE
Coming soon, this page will be full of links that guides you through the project categories more efficiently.Coming soon, this page will be full of links that guides you through the project categories more efficiently.Coming soon, this page will be full of links that guides you through the project categories more efficiently.Coming soon, this page will be full of links that guides you through the project categories more efficiently.

## IMAGE TEST
![imagetest1](/images/coming-soon.jpg)

## YOUTUBE VIDEO TEST
<iframe width="640" height="420"
src="https://www.youtube.com/embed/hULEn2_4Unw?controls=1">
</iframe>

## AUDIO FILE TEST