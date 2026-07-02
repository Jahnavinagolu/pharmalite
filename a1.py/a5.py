def count_words_in_file(filename):
    try:
        count = 0

        with open(filename, 'r', encoding='utf-8') as fp:
            for line in fp:
                words = line.split()
                count += len(words)

        return count

    except FileNotFoundError:
        return "Error: File not found"

    except Exception as e:
        return f"Error: {e}"


file_name = input("Enter file name with extension : ")

result = count_words_in_file(file_name)

print("Total words count:", result)